// 문제 1: 요일을 나타내는 상수
{
    enum Day {
        MONDAY = 1,
        TUESDAY,
        WEDNESDAY,
        THURSDAY,
        FRIDAY,
        SATURDAY,
        SUNDAY,
    }

    function getDayName(day: Day): string {
        switch (day) {
            case Day.MONDAY: return "Monday";
            case Day.TUESDAY: return "Tuesday";
            case Day.WEDNESDAY: return "Wednesday";
            case Day.THURSDAY: return "Thursday";
            case Day.FRIDAY: return "Friday";
            case Day.SATURDAY: return "Saturday";
            case Day.SUNDAY: return "Sunday";
            default: return "Invalid day";
        }
    }
}

// 문제 2: 상태 코드
{
    enum StatusCode {
        SUCCESS = 200,
        NOT_FOUND = 404,
        INTERNAL_ERROR = 500,
    }

    function getStatusMessage(status: StatusCode): string {
        switch (status) {
            case StatusCode.SUCCESS: return "Success";
            case StatusCode.NOT_FOUND: return "Not Found";
            case StatusCode.INTERNAL_ERROR: return "Internal Server Error";
            default: return "Unknown Status";
        }
    }
}

// 문제 3: 우편번호에 따른 지역 이름
{
    enum City {
        SEOUL = "Seoul",
        BUSAN = "Busan",
        DAEGU = "Daegu",
    }

    function getCityByZip(zip: string): string {
        switch (zip) {
            case "100": return City.SEOUL;
            case "200": return City.BUSAN;
            case "300": return City.DAEGU;
            default: return "Unknown City";
        }
    }
}

// 문제 4: 사용자 권한
{
    enum Role {
        ADMIN = "admin",
        USER = "user",
        GUEST = "guest",
    }

    function getPermissionLevel(role: Role): string {
        switch (role) {
            case Role.ADMIN: return "Full access";
            case Role.USER: return "Limited access";
            case Role.GUEST: return "Guest access";
            default: return "No access";
        }
    }
}
// 문제 5: 상품 상태
{
    enum ProductStatus {
        PENDING = 1,
        SHIPPED,
        DELIVERED,
    }

    function getProductStatus(status: ProductStatus): string {
        switch (status) {
            case ProductStatus.PENDING: return "Pending";
            case ProductStatus.SHIPPED: return "Shipped";
            case ProductStatus.DELIVERED: return "Delivered";
            default: return "Unknown Status";
        }
    }
}

// 문제 6: 주문 상태
{
    enum OrderStatus {
        ORDER_PLACED,
        PAYMENT_PENDING,
        SHIPPED,
        DELIVERED,
    }

    function getOrderStatus(status: OrderStatus): string {
        switch (status) {
            case OrderStatus.ORDER_PLACED: return "Your order has been placed.";
            case OrderStatus.PAYMENT_PENDING: return "Payment is pending.";
            case OrderStatus.SHIPPED: return "Your order has been shipped.";
            case OrderStatus.DELIVERED: return "Your order has been delivered.";
            default: return "Unknown Status";
        }
    }
}

// 문제 7: 상태 변경
{
    enum Status {
        IS_ACTIVE = "true",
        IS_INACTIVE = "false",
    }

    function toggleStatus(status: Status): boolean {
        return status === Status.IS_ACTIVE ? true : false;
    }
}

// 문제 8: 선택지 값
{
    enum Option {
        ONE = "Option 1",
        TWO = "Option 2",
        THREE = "Option 3",
    }

    function getOptionValue(option: Option): string {
        switch (option) {
            case Option.ONE: return "You selected Option 1.";
            case Option.TWO: return "You selected Option 2.";
            case Option.THREE: return "You selected Option 3.";
            default: return "Invalid option";
        }
    }
}

// 문제 9: 식사 시간
{
    enum Meal {
        BREAKFAST = "Breakfast",
        LUNCH = "Lunch",
        DINNER = "Dinner",
    }

    function getMealTime(meal: Meal): string {
        switch (meal) {
            case Meal.BREAKFAST: return "Good morning, it's breakfast time!";
            case Meal.LUNCH: return "Good afternoon, it's lunch time!";
            case Meal.DINNER: return "Good evening, it's dinner time!";
            default: return "Invalid meal time";
        }
    }
}

// 문제 10: 로그인 상태
{
    enum LoginStatus {
        LOGGED_IN = "logged_in",
        LOGGED_OUT = "logged_out",
    }

    function checkLoginStatus(status: LoginStatus): string {
        switch (status) {
            case LoginStatus.LOGGED_IN: return "You are logged in.";
            case LoginStatus.LOGGED_OUT: return "You are logged out.";
            default: return "Unknown status";
        }
    }
}

{
    const LoginStatus = {
        LOGGED_IN: "logged_in",
        LOGGED_OUT: "logged_out",        
    } as const;

    type LoginStatus = (typeof LoginStatus)[keyof typeof LoginStatus];

    function checkLoginStatus(status: LoginStatus): string {
        switch (status) {
            case LoginStatus.LOGGED_IN: return "You are logged in.";
            case LoginStatus.LOGGED_OUT: return "You are logged out.";
            default: return "Unknown status";
        }
    }
    
    console.log(checkLoginStatus(LoginStatus.LOGGED_IN));
    console.log(checkLoginStatus(LoginStatus.LOGGED_OUT));
}