import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Star, Gift, ClipboardList, CreditCard, Settings, LogOut } from "lucide-react";

interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  role: string;
  rating: number;
  registrationDate: string;
  purchasesCount: number;
  reviewsCount: number;
}

const Profile = () => {
  // Мокап данных пользователя (в реальном приложении они будут загружаться с сервера)
  const userProfile: UserProfile = {
    id: "usr_84572193",
    firstName: "Алексей",
    lastName: "Петров",
    email: "alexey.petrov@example.com",
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    role: "Пользователь",
    rating: 4.7,
    registrationDate: "15.06.2023",
    purchasesCount: 12,
    reviewsCount: 8
  };

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => (
      <Star 
        key={index}
        className={`h-4 w-4 ${index < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : 
                             index < rating ? "text-yellow-400 fill-yellow-400 opacity-50" : 
                             "text-gray-300"}`}
      />
    ));
  };

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Личный кабинет</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Профиль пользователя */}
        <Card className="md:col-span-1">
          <CardHeader className="flex flex-col items-center text-center">
            <Avatar className="h-24 w-24 mb-2">
              <AvatarImage src={userProfile.avatar} alt={`${userProfile.firstName} ${userProfile.lastName}`} />
              <AvatarFallback>{userProfile.firstName[0]}{userProfile.lastName[0]}</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <CardTitle className="text-xl">{userProfile.firstName} {userProfile.lastName}</CardTitle>
              <CardDescription>{userProfile.email}</CardDescription>
            </div>
            <div className="mt-2 flex items-center">
              <Badge variant="outline" className="bg-primary/10 mr-2">
                {userProfile.role}
              </Badge>
              <span className="text-sm text-muted-foreground">ID: {userProfile.id}</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Рейтинг на сайте</p>
                <div className="flex items-center">
                  <div className="flex mr-2">
                    {renderStars(userProfile.rating)}
                  </div>
                  <span className="font-medium">{userProfile.rating}</span>
                </div>
              </div>
              
              <Separator />
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold">{userProfile.purchasesCount}</p>
                  <p className="text-sm text-muted-foreground">Покупок</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">{userProfile.reviewsCount}</p>
                  <p className="text-sm text-muted-foreground">Отзывов</p>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Навигация</p>
                <div className="grid grid-cols-1 gap-2">
                  <Button variant="outline" className="justify-start">
                    <ClipboardList className="mr-2 h-4 w-4" />
                    Мои заказы
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Способы оплаты
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Settings className="mr-2 h-4 w-4" />
                    Настройки
                  </Button>
                  <Button variant="outline" className="justify-start text-red-500 hover:text-red-600">
                    <LogOut className="mr-2 h-4 w-4" />
                    Выйти
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Основная секция с вкладками */}
        <div className="md:col-span-2">
          <Tabs defaultValue="overview">
            <TabsList className="mb-6 w-full">
              <TabsTrigger value="overview" className="flex-1">Обзор</TabsTrigger>
              <TabsTrigger value="purchases" className="flex-1">Покупки</TabsTrigger>
              <TabsTrigger value="reviews" className="flex-1">Отзывы</TabsTrigger>
              <TabsTrigger value="bonuses" className="flex-1">Бонусы</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Информация о профиле</CardTitle>
                  <CardDescription>Основные сведения о вашем аккаунте</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Имя</p>
                      <p>{userProfile.firstName}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Фамилия</p>
                      <p>{userProfile.lastName}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Email</p>
                      <p>{userProfile.email}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Дата регистрации</p>
                      <p>{userProfile.registrationDate}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">ID пользователя</p>
                      <p>{userProfile.id}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Роль</p>
                      <p>{userProfile.role}</p>
                    </div>
                  </div>
                  <Button variant="outline">Редактировать профиль</Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Последняя активность</CardTitle>
                  <CardDescription>Недавние действия и посещения</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Просмотр товара: Механическая клавиатура</p>
                        <p className="text-sm text-muted-foreground">Сегодня, 14:23</p>
                      </div>
                      <Button variant="ghost" size="sm">Посмотреть</Button>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Добавление в избранное: Игровая мышь</p>
                        <p className="text-sm text-muted-foreground">Вчера, 19:45</p>
                      </div>
                      <Button variant="ghost" size="sm">Посмотреть</Button>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Оформление заказа #A-12584</p>
                        <p className="text-sm text-muted-foreground">24.04.2025, 11:17</p>
                      </div>
                      <Button variant="ghost" size="sm">Детали</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="purchases">
              <Card>
                <CardHeader>
                  <CardTitle>История покупок</CardTitle>
                  <CardDescription>Список всех ваших заказов</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Заказ #A-12584</p>
                        <p className="text-sm text-muted-foreground">24.04.2025 • 35 990 ₽ • Завершен</p>
                      </div>
                      <Button variant="outline" size="sm">Подробнее</Button>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Заказ #A-12398</p>
                        <p className="text-sm text-muted-foreground">15.03.2025 • 12 990 ₽ • Завершен</p>
                      </div>
                      <Button variant="outline" size="sm">Подробнее</Button>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Заказ #A-12256</p>
                        <p className="text-sm text-muted-foreground">28.02.2025 • 9 990 ₽ • Завершен</p>
                      </div>
                      <Button variant="outline" size="sm">Подробнее</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="reviews">
              <Card>
                <CardHeader>
                  <CardTitle>Мои отзывы</CardTitle>
                  <CardDescription>Отзывы, которые вы оставили на товары</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between">
                        <p className="font-medium">Механическая клавиатура Logitech G Pro X</p>
                        <div className="flex">{renderStars(5)}</div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">21.04.2025</p>
                      <p className="mt-2">Отличная клавиатура! Очень удобная и с хорошей тактильной отдачей. Быстрый отклик, прочная конструкция.</p>
                    </div>
                    <Separator />
                    <div>
                      <div className="flex justify-between">
                        <p className="font-medium">Наушники Sony WH-1000XM5</p>
                        <div className="flex">{renderStars(4)}</div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">15.03.2025</p>
                      <p className="mt-2">Шумоподавление на высоте, звук чистый и глубокий. Единственный минус - цена.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="bonuses">
              <Card>
                <CardHeader>
                  <CardTitle>Бонусная программа</CardTitle>
                  <CardDescription>Ваши накопленные бонусы и преимущества</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-primary/10 rounded-lg p-6 text-center">
                    <Gift className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-2xl font-bold mb-1">1250 бонусов</h3>
                    <p className="text-muted-foreground">Доступно для использования</p>
                    <Button className="mt-4">Использовать бонусы</Button>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3">История начислений</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <p>Заказ #A-12584</p>
                        <p className="font-medium text-green-600">+350 бонусов</p>
                      </div>
                      <Separator />
                      <div className="flex justify-between">
                        <p>Заказ #A-12398</p>
                        <p className="font-medium text-green-600">+130 бонусов</p>
                      </div>
                      <Separator />
                      <div className="flex justify-between">
                        <p>Заказ #A-12256</p>
                        <p className="font-medium text-green-600">+100 бонусов</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Profile;
