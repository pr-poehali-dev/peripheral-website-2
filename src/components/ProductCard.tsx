import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  category: string;
  isNew?: boolean;
}

const ProductCard = ({ id, title, price, imageUrl, category, isNew }: ProductCardProps) => {
  return (
    <Card className="w-[280px] overflow-hidden transition-all hover:shadow-md">
      <div className="relative">
        {isNew && (
          <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded-md z-10">
            Новинка
          </div>
        )}
        <img 
          src={imageUrl} 
          alt={title} 
          className="h-[160px] w-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader className="p-4 pb-0">
        <div className="text-sm text-muted-foreground">{category}</div>
        <CardTitle className="text-base truncate">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <p className="font-semibold text-lg">{price.toLocaleString('ru-RU')} ₽</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button size="sm" variant="default">В корзину</Button>
        <Button size="icon" variant="outline">
          <Heart className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
