import { useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, SlidersHorizontal } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Интерфейс для категории
interface Category {
  id: string;
  name: string;
}

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

const Catalog = () => {
  // Состояния для фильтров и сортировки
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("popular");
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  // Список категорий
  const categories: Category[] = [
    { id: "all", name: "Все товары" },
    { id: "keyboards", name: "Клавиатуры" },
    { id: "mice", name: "Мыши" },
    { id: "headphones", name: "Наушники" },
    { id: "monitors", name: "Мониторы" },
  ];

  // Фиктивные данные товаров
  useEffect(() => {
    // Имитация загрузки данных с сервера
    const mockProducts: Product[] = [
      {
        id: "1",
        title: "Механическая клавиатура Logitech G Pro X",
        price: 12990,
        imageUrl: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVjaGFuaWNhbCUyMGtleWJvYXJkfGVufDB8fDB8fHww",
        category: "Клавиатуры",
        categoryId: "keyboards",
      },
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
        id: "3",
        title: "Наушники Sony WH-1000XM5",
        price: 35990,
        imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
        category: "Наушники",
        categoryId: "headphones",
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
        id: "5",
        title: "Клавиатура HyperX Alloy Origins Core",
        price: 8990,
        imageUrl: "https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHlwZXJ4JTIwa2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D",
        category: "Клавиатуры",
        categoryId: "keyboards",
      },
      {
        id: "6",
        title: "Мышь Logitech MX Master 3S",
        price: 8990,
        imageUrl: "https://images.unsplash.com/photo-1624823183493-ed5832f48f18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2lyZWxlc3MlMjBtb3VzZXxlbnwwfHwwfHx8MA%3D%3D",
        category: "Мыши",
        categoryId: "mice",
      },
      {
        id: "7",
        title: "Монитор Dell UltraSharp 32 HDR PremierColor",
        price: 120990,
        imageUrl: "https://images.unsplash.com/photo-1588200908342-23b585c03e26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RGVsbCUyMG1vbml0b3J8ZW58MHx8MHx8fDA%3D",
        category: "Мониторы",
        categoryId: "monitors",
      },
      {
        id: "8",
        title: "Наушники Bose QuietComfort 45",
        price: 28990,
        imageUrl: "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9zZSUyMGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D",
        category: "Наушники",
        categoryId: "headphones",
      },
      {
        id: "9",
        title: "Клавиатура Das Keyboard 4 Professional",
        price: 15990,
        imageUrl: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lY2hhbmljYWwlMjBrZXlib2FyZHxlbnwwfHwwfHx8MA%3D%3D",
        category: "Клавиатуры",
        categoryId: "keyboards",
      },
      {
        id: "10",
        title: "Мышь Glorious Model D-",
        price: 4990,
        imageUrl: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2FtaW5nJTIwbW91c2V8ZW58MHx8MHx8fDA%3D",
        category: "Мыши",
        categoryId: "mice",
      },
      {
        id: "11",
        title: "Монитор LG UltraGear 27GP950",
        price: 59990,
        imageUrl: "https://images.unsplash.com/photo-1603481546238-487240415921?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdhbWluZyUyMG1vbml0b3J8ZW58MHx8MHx8fDA%3D",
        category: "Мониторы",
        categoryId: "monitors",
      },
      {
        id: "12",
        title: "Наушники SteelSeries Arctis Nova Pro",
        price: 24990,
        imageUrl: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdhbWluZyUyMGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D",
        category: "Наушники",
        categoryId: "headphones",
        isNew: true,
      },
    ];
    
    setProducts(mockProducts);
    setFilteredProducts(mockProducts);
  }, []);

  // Функция для фильтрации товаров
  useEffect(() => {
    let result = [...products];
    
    // Фильтрация по категории
    if (selectedCategory !== "all") {
      result = result.filter(product => product.categoryId === selectedCategory);
    }
    
    // Фильтрация по поисковому запросу
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(product => 
        product.title.toLowerCase().includes(query) || 
        product.category.toLowerCase().includes(query)
      );
    }
    
    // Сортировка
    switch (sortOption) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "name-desc":
        result.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "new":
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      // По умолчанию: по популярности (не меняем порядок)
    }
    
    setFilteredProducts(result);
  }, [selectedCategory, searchQuery, sortOption, products]);

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Каталог</h1>
      
      {/* Фильтры и сортировка */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Поиск товаров..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex gap-2">
          <Select value={sortOption} onValueChange={setSortOption}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Сортировать по" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">По популярности</SelectItem>
              <SelectItem value="price-asc">Сначала дешевле</SelectItem>
              <SelectItem value="price-desc">Сначала дороже</SelectItem>
              <SelectItem value="name-asc">По названию А-Я</SelectItem>
              <SelectItem value="name-desc">По названию Я-А</SelectItem>
              <SelectItem value="new">Сначала новинки</SelectItem>
            </SelectContent>
          </Select>
          
          <Button variant="outline" size="icon">
            <SlidersHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      {/* Вкладки категорий */}
      <Tabs defaultValue="all" value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
        <TabsList className="mb-6 flex overflow-x-auto pb-1">
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id} className="min-w-fit">
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {/* Содержимое каждой категории */}
        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="space-y-8">
            {/* Товары отображаются для всех вкладок, но фильтруются через состояние */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard 
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  imageUrl={product.imageUrl}
                  category={product.category}
                  isNew={product.isNew}
                />
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-lg text-muted-foreground">
                  По вашему запросу товары не найдены.
                </p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                    setSortOption("popular");
                  }}
                >
                  Сбросить все фильтры
                </Button>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Catalog;
