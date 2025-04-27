import { useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

// Интерфейс для товара
interface Product {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  category: string;
  categoryId: string;
  isNew?: boolean;
}

const Favorites = () => {
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Имитация загрузки избранных товаров с сервера
    // В реальном приложении здесь был бы запрос к API
    setTimeout(() => {
      const mockFavorites: Product[] = [
        {
          id: "2",
          title: "Игровая мышь Razer DeathAdder V3 Pro",
          price: 9990,
          imageUrl: "https://images.unsplash.com/photo-1615663245856-bb3009a6afa3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtaW5nJTIwbW91c2V8ZW58MHx8MHx8fDA%3D",
          category: "Мыши",
          categoryId: "mice",
          isNew: true,
        },
        {
          id: "4",
          title: "Игровой монитор ASUS ROG Swift 360Hz",
          price: 89990,
          imageUrl: "https://images.unsplash.com/photo-1548611716-3000708c6cf2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FtaW5nJTIwbW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D",
          category: "Мониторы",
          categoryId: "monitors",
          isNew: true,
        },
        {
          id: "8",
          title: "Наушники Bose QuietComfort 45",
          price: 28990,
          imageUrl: "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9zZSUyMGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D",
          category: "Наушники",
          categoryId: "headphones",
        },
      ];
      
      setFavorites(mockFavorites);
      setIsLoading(false);
    }, 800);
  }, []);

  const removeFromFavorites = (productId: string) => {
    setFavorites(prevFavorites => prevFavorites.filter(item => item.id !== productId));
  };

  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Избранное</h1>
        <div className="flex items-center gap-2">
          <Heart className="h-5 w-5 text-primary" fill="currentColor" />
          <span className="font-medium">{favorites.length} {favorites.length === 1 ? 'товар' : 
            favorites.length > 1 && favorites.length < 5 ? 'товара' : 'товаров'}</span>
        </div>
      </div>
      
      {isLoading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-pulse flex flex-col items-center gap-4">
            <div className="h-8 w-8 rounded-full bg-primary/20"></div>
            <div className="h-4 w-40 rounded bg-primary/20"></div>
          </div>
        </div>
      ) : favorites.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {favorites.map((product) => (
              <div key={product.id} className="relative group">
                <ProductCard
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  imageUrl={product.imageUrl}
                  category={product.category}
                  isNew={product.isNew}
                />
                <Button 
                  variant="destructive" 
                  size="icon" 
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => removeFromFavorites(product.id)}
                >
                  <Heart className="h-4 w-4" fill="currentColor" />
                </Button>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Button 
              variant="outline" 
              className="w-full max-w-md"
              onClick={() => setFavorites([])}
            >
              Очистить избранное
            </Button>
          </div>
        </>
      ) : (
        <div className="text-center py-16">
          <Heart className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
          <h2 className="text-2xl font-medium mb-2">В избранном пока пусто</h2>
          <p className="text-muted-foreground mb-6">
            Добавляйте товары в избранное, нажимая на значок сердечка в карточке товара
          </p>
          <Button variant="default" size="lg" asChild>
            <a href="/catalog">Перейти в каталог</a>
          </Button>
        </div>
      )}
    </div>
  );
};

export default Favorites;
