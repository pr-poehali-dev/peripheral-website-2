import Carousel from "@/components/Carousel";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";

// Моковые данные для экспертных статей
const expertArticles = [
  {
    title: "Как выбрать идеальную геймерскую мышь",
    excerpt: "Разбираемся в DPI, типах сенсоров и форм-факторах для разных стилей игры",
    author: "Иван Петров",
    date: "25 апреля 2025",
    imageUrl: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Механические клавиатуры: типы переключателей",
    excerpt: "Полное руководство по механическим, оптическим и мембранным переключателям",
    author: "Елена Смирнова",
    date: "22 апреля 2025",
    imageUrl: "https://images.unsplash.com/photo-1600467556662-d9ba3596c0ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Как настроить свою периферию для киберспорта",
    excerpt: "Профессиональные настройки от топовых игроков из разных дисциплин",
    author: "Максим Кузнецов",
    date: "20 апреля 2025",
    imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Графические планшеты для дизайнеров",
    excerpt: "От выбора размера до настройки чувствительности пера",
    author: "Алина Соколова",
    date: "18 апреля 2025",
    imageUrl: "https://images.unsplash.com/photo-1607069308259-cb7a1cdb7b98?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
];

// Моковые данные для новинок
const newProducts = [
  {
    id: "1",
    title: "Logitech G Pro X Superlight 2",
    price: 12999,
    imageUrl: "https://images.unsplash.com/photo-1617775407436-d7d31e5bdb5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Мыши",
    isNew: true
  },
  {
    id: "2",
    title: "Keychron Q3 Pro",
    price: 15499,
    imageUrl: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Клавиатуры",
    isNew: true
  },
  {
    id: "3",
    title: "SteelSeries Arctis Nova Pro",
    price: 32990,
    imageUrl: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Наушники",
    isNew: true
  },
  {
    id: "4",
    title: "Razer Huntsman V3 Pro",
    price: 21490,
    imageUrl: "https://images.unsplash.com/photo-1624438253998-7bb8eca8a3f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Клавиатуры",
    isNew: true
  },
];

// Моковые данные для популярных товаров
const popularProducts = [
  {
    id: "5",
    title: "Glorious Model O",
    price: 5990,
    imageUrl: "https://images.unsplash.com/photo-1623820919239-0d0ff10797a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Мыши"
  },
  {
    id: "6",
    title: "HyperX Cloud Alpha",
    price: 8490,
    imageUrl: "https://images.unsplash.com/photo-1599669454699-248893623440?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Наушники"
  },
  {
    id: "7",
    title: "Logitech G Pro X",
    price: 10990,
    imageUrl: "https://images.unsplash.com/photo-1612698093158-e07ac200d9e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Микрофоны"
  },
  {
    id: "8",
    title: "Ducky One 3",
    price: 13490,
    imageUrl: "https://images.unsplash.com/photo-1595044426077-d36d9236d45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Клавиатуры"
  },
  {
    id: "9",
    title: "BenQ ZOWIE XL2546K",
    price: 45990,
    imageUrl: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Мониторы"
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <section className="bg-gradient-to-b from-secondary to-background py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Лучшая компьютерная периферия</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Экспертный обзор и подбор оборудования для работы и игр
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="container py-8">
        {/* Expert articles */}
        <Carousel title="Статьи экспертов">
          {expertArticles.map((article, index) => (
            <ArticleCard
              key={index}
              title={article.title}
              excerpt={article.excerpt}
              author={article.author}
              date={article.date}
              imageUrl={article.imageUrl}
            />
          ))}
        </Carousel>

        {/* New products */}
        <Carousel title="Новинки">
          {newProducts.map((product) => (
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
        </Carousel>

        {/* Popular products */}
        <Carousel title="Популярные товары" autoScroll={true}>
          {popularProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              imageUrl={product.imageUrl}
              category={product.category}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Index;
