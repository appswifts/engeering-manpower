
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TeamMemberProps {
  name: string;
  position: string;
  imageSrc: string;
  className?: string;
}

const TeamMember = ({
  name,
  position,
  imageSrc,
  className,
}: TeamMemberProps) => {
  // Get initials from name for avatar fallback
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Card className={cn("h-full transition-all hover:shadow-md", className)}>
      <CardContent className="p-6 flex flex-col items-center text-center">
        <Avatar className="h-32 w-32 mb-4 border-2 border-primary/20">
          <AvatarImage src={imageSrc} alt={name} className="object-cover" />
          <AvatarFallback className="text-lg font-semibold bg-primary/10 text-primary">
            {initials}
          </AvatarFallback>
        </Avatar>
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-gray-600">{position}</p>
      </CardContent>
    </Card>
  );
};

export default TeamMember;
