import axios from 'axios';
import { supabase } from './supabase';

export interface BusinessRole {
  role: string;
  description: string;
  salary: number;
}

export async function fetchBusinessRoles(searchTerm: string = ''): Promise<BusinessRole[]> {
  try {
    const { data, error } = await supabase
      .from('business_roles')
      .select('*')
      .ilike('role', `%${searchTerm}%`)
      .limit(10);

    if (error) {
      throw error;
    }

    return data as BusinessRole[];
  } catch (error) {
    console.error('Error fetching business roles:', error);
    return [];
  }
}
