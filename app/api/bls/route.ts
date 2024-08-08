import { NextResponse } from 'next/server';
import axios from 'axios';

const BLS_API_URL = 'https://api.bls.gov/publicAPI/v2/timeseries/data/';
const BLS_API_KEY = process.env.BLS_API_KEY;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const searchTerm = searchParams.get('search') || '';

  try {
    const seriesIds = [
      'OEUN000000000000000000001', // All Occupations
      'OEUN000000000000011000000', // Management Occupations
      'OEUN000000000000013000000', // Business and Financial Operations Occupations
      'OEUN000000000000015000000', // Computer and Mathematical Occupations
      'OEUN000000000000017000000', // Architecture and Engineering Occupations
      'OEUN000000000000019000000', // Life, Physical, and Social Science Occupations
    ];

    const response = await axios.post(BLS_API_URL, {
      seriesid: seriesIds,
      startyear: '2022',
      endyear: '2023',
      registrationkey: BLS_API_KEY,
      catalog: true,
      calculations: false,
      annualaverage: true,
      aspects: false
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.data.status !== 'REQUEST_SUCCEEDED') {
      throw new Error('BLS API request failed: ' + response.data.message);
    }

    const occupations = response.data.Results.series
      .filter((series: any) => series.data.length > 0)
      .map((series: any) => {
        const latestData = series.data.find((item: any) => item.periodName === 'Annual');
        return {
          role: series.catalog.occupation,
          salary: Math.round(parseFloat(latestData.value) * 1000) // Convert to average salary
        };
      });

    // Filter occupations based on the search term
    const filteredOccupations = occupations.filter((occupation) =>
      occupation.role.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return NextResponse.json(filteredOccupations);
  } catch (error) {
    console.error('Error fetching business roles:', error);
    return NextResponse.json({ error: 'Failed to fetch business roles' }, { status: 500 });
  }
}