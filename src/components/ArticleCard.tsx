import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon, UserIcon } from "lucide-react";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  imageUrl: string;
}

const ArticleCard = ({ title, excerpt, author, date, imageUrl }: ArticleCardProps) => {
  return (
    <Card className="w-[320px] overflow-hidden transition-all hover:shadow-md">
      <div className="overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="h-[180px] w-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader className="p-4 pb-2">
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-muted-foreground line-clamp-3">{excerpt}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 text-sm text-muted-foreground">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <UserIcon className="h-3.5 w-3.5" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-1">
            <CalendarIcon className="h-3.5 w-3.5" />
            <span>{date}</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;
