import { Invite, TeamMember } from "./types";

export const teamMembers: TeamMember[] = [
  {
    id: 0,
    status: 'approved',
    user: {
        id: 0,
        name: 'Joe',
        lastName: 'Bloggs',
        phone: '+353 1234567',
        email: 'joe.bloggs@test.com',
    },
    role: 'Administrator',
  },
  {
    id: 1,
    status: 'approved',
    user: {
        id: 0,
        name: 'Sarah',
        lastName: 'Connors',
        phone: '+353 1234567',
        email: 'sarah@test.com',
    },
    role: 'Administrator',
  },
  {
    id: 2,
    status: 'approved',
    user: {
        id: 0,
        name: 'Joespheh',
        lastName: 'Bloggs',
        phone: '+353 1234567',
        email: 'Joespheh.bloggs@test.com',
    },
    role: 'Standard',
  },
  {
    id: 3,
    status: 'approved',
    user: {
        id: 0,
        name: 'Sarah',
        lastName: 'Connors',
        phone: '+353 1234567',
        email: 'sarah@test.com',
    },
    role: 'Standard',
  },
  {
    id: 4,
    status: 'approved',
    user: {
        id: 0,
        name: 'Mathew',
        lastName: 'Murphy',
        phone: '+353 1234567',
        email: 'mathew.bloggs@test.com',
    },
    role: 'Standard',
  },
  {
    id: 5,
    status: 'approved',
    user: {
        id: 0,
        name: 'Mathew',
        lastName: 'Murphy',
        phone: '+353 1234567',
        email: 'mathew.bloggs@test.com',
    },
    role: 'Standard',
  }
];

export const  invites: Invite[] = [
  {
    id: 0,
    phone: '+353 1234567',
    role: 'Administrator',
  }
]