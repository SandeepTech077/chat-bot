
// Type for individual team member data
export type TeamMember = {
  id: number;
  name: string;
  role: string;
  email: string;
  facebook: string | null ;
  instagram: string | null;
  linkedin: string | null;
  twitter: string | null;
  phone: string;
  image: string;
  alt:string;
  description1: string;
};

// Props type for TeamCard component
export type TeamCardProps = {
  data: TeamMember;
  openModal: (member: TeamMember) => void;
};

// Props type for modal component
export type TeamModalProps = {
  isOpen: boolean;
  onClose: () => void;
  data: TeamMember | null;
};
