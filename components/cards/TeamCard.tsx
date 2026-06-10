import React from 'react';
import { TeamMember } from '@/lib/types';
import { Avatar } from '@/components/ui/Avatar';
import { Heading } from '@/components/ui/Heading';
import { Paragraph } from '@/components/ui/Paragraph';
import { Badge } from '@/components/ui/Badge';
import { Icon } from '@/components/ui/Icon';

interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="flex flex-col items-center bg-white border border-[#D4E5F7] rounded-xl p-6 text-center hover:shadow-[0_8px_24px_rgba(13,73,153,0.12)] hover:-translate-y-1 transition-all duration-300">
      <div className="mb-6">
        <Avatar 
          src={`https://picsum.photos/seed/${member.slug || member.name.replace(/\s+/g,'')}/200/200`} 
          initials={member.initials} 
          size="xl" 
          className="border-4 border-[#EAF3FF] shadow-sm"
        />
      </div>
      
      <Badge size="sm" variant="secondary" className="mb-3 uppercase tracking-wider">{member.department}</Badge>
      
      <Heading variant="h4" responsive={false} className="mb-1">
        {member.name}
      </Heading>
      
      <Paragraph size="sm" className="font-medium text-[#1A6FD4] mb-4">
        {member.role}
      </Paragraph>
      
      <Paragraph size="sm" muted className="mb-6 flex-grow">
        {member.shortBio}
      </Paragraph>

      {member.social && (
        <div className="flex items-center gap-3 mt-auto pt-4 border-t border-[#EEF5FF] w-full justify-center">
          {member.social.linkedin && (
            <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#8BAABF] hover:text-[#1A6FD4] transition-colors">
              <Icon name="link" size="sm" />
            </a>
          )}
          {member.social.twitter && (
            <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-[#8BAABF] hover:text-[#00B4D8] transition-colors">
              <Icon name="tag" size="sm" />
            </a>
          )}
        </div>
      )}
    </div>
  );
}
