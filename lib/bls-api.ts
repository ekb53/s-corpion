import axios from 'axios';
import { supabase } from './supabase';

interface BusinessRoleData {
  role: string;
  salary: number;
  description?: string;
}

export async function fetchBusinessRoles(searchTerm: string = ''): Promise<BusinessRoleData[]> {
  try {
    const { data, error } = await supabase
      .from('business_roles')
      .select('role, salary, description')
      .ilike('role', `%${searchTerm}%`)
      .limit(10);

    if (error) {
      throw error;
    }

    return data as BusinessRoleData[];
  } catch (error) {
    console.error('Error fetching business roles:', error);
    return [];
  }
}
