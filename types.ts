export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface Service extends CosmicObject {
  type: 'services';
  metadata: {
    name?: string;
    icon?: string;
    short_description?: string;
    full_description?: string;
    key_features?: string;
    featured_image?: { url: string; imgix_url: string };
  };
}

export interface TeamMember extends CosmicObject {
  type: 'team-members';
  metadata: {
    full_name?: string;
    role?: string;
    bio?: string;
    photo?: { url: string; imgix_url: string };
    linkedin_url?: string;
    email?: string;
  };
}

export interface CaseStudy extends CosmicObject {
  type: 'case-studies';
  metadata: {
    client_name?: string;
    industry?: string;
    project_summary?: string;
    challenge?: string;
    solution?: string;
    results?: string;
    featured_image?: { url: string; imgix_url: string };
    related_services?: Service[];
  };
}

export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    quote?: string;
    client_name?: string;
    client_role?: string;
    client_company?: string;
    client_photo?: { url: string; imgix_url: string };
    related_service?: Service;
  };
}

export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}