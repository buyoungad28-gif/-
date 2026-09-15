export interface CompanyInfo {
  name: string;
  representative: string;
  phoneMobile: string;
  phoneOffice: string;
  address: string;
  addressDetail: string;
  businessHours: string;
  emergencyAvailable: boolean;
  serviceAreas: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  tag: string;
  features: string[];
  steps: string[];
  recommendedFor: string[];
  image: string;
}

export interface PortfolioCase {
  id: string;
  category: 'waterproof' | 'exterior' | 'epoxy' | 'grouting' | 'material';
  title: string;
  location: string;
  scope: string;
  date: string;
  image: string;
  badge: string;
  description: string;
}

export interface MaterialItem {
  id: string;
  name: string;
  brand: string;
  category: string;
  spec: string;
  capacity: string;
  features: string[];
  isPopular?: boolean;
}

export interface QuoteRequest {
  id?: string;
  serviceType: string;
  areaPyeong: number;
  currentCondition: string;
  location: string;
  customerName: string;
  customerPhone: string;
  message?: string;
  createdAt?: string;
}
