// ### 문제 1: 사용자 인증 상태
{
    enum UserStatus {
        UNVERIFIED = "UNVERIFIED",
        PENDING = "PENDING",
        VERIFIED = "VERIFIED",
    }

    function getUserStatus(status: UserStatus): string {
        switch (status) {
            case UserStatus.UNVERIFIED: return "User is unverified";
            case UserStatus.PENDING: return "User verification is pending";
            case UserStatus.VERIFIED: return "User is verified";
            default: return "Unknown status";
        }
    }
}

// ### 문제 2: 주문 처리 상태 (다양한 상태)
{
    enum OrderState {
        INITIATED = 0,
        PROCESSING = 1,
        SHIPPED = 2,
        DELIVERED = 3,
        CANCELLED = 4,
    }

    function getOrderState(state: OrderState): string {
        switch (state) {
            case OrderState.INITIATED: return "Order initiated";
            case OrderState.PROCESSING: return "Order being processed";
            case OrderState.SHIPPED: return "Order shipped";
            case OrderState.DELIVERED: return "Order delivered";
            case OrderState.CANCELLED: return "Order cancelled";
            default: return "Unknown state";
        }
    }
}

// ### 문제 3: 레벨별 사용자 경험
{
    enum UserLevel {
        BEGINNER = "BEGINNER",
        INTERMEDIATE = "INTERMEDIATE",
        EXPERT = "EXPERT",
    }

    function getUserLevel(level: UserLevel): string {
        switch (level) {
            case UserLevel.BEGINNER: return "Beginner user";
            case UserLevel.INTERMEDIATE: return "Intermediate user";
            case UserLevel.EXPERT: return "Expert user";
            default: return "Unknown level";
        }
    }
}

// ### 문제 4: 결제 상태
{
    enum PaymentStatus {
        NOT_STARTED = 0,
        IN_PROGRESS = 1,
        COMPLETED = 2,
        FAILED = 3,
    }

    function getPaymentStatus(status: PaymentStatus): string {
        switch (status) {
            case PaymentStatus.NOT_STARTED: return "Payment not started";
            case PaymentStatus.IN_PROGRESS: return "Payment in progress";
            case PaymentStatus.COMPLETED: return "Payment completed";
            case PaymentStatus.FAILED: return "Payment failed";
            default: return "Unknown status";
        }
    }
}

// ### 문제 5: 회원 가입 단계
{
    enum SignupStep {
        STEP_ONE = "STEP_ONE",
        STEP_TWO = "STEP_TWO",
        STEP_THREE = "STEP_THREE",
    }

    function getSignupStep(step: SignupStep): string {
        switch (step) {
            case SignupStep.STEP_ONE: return "Step 1: Enter details";
            case SignupStep.STEP_TWO: return "Step 2: Confirm email";
            case SignupStep.STEP_THREE: return "Step 3: Complete registration";
            default: return "Unknown step";
        }
    }
}

// ### 문제 6: 차종별 가격
{
    enum CarType {
        SEDAN = "SEDAN",
        SUV = "SUV",
        TRUCK = "TRUCK",
    }

    function getPriceByCarType(type: CarType): number {
        switch (type) {
            case CarType.SEDAN: return 30000;
            case CarType.SUV: return 40000;
            case CarType.TRUCK: return 50000;
            default: return 0;
        }
    }
}

// ### 문제 7: 채팅 메시지 유형
{
    enum MessageType {
        TEXT = "TEXT",
        IMAGE = "IMAGE",
        VIDEO = "VIDEO",
        FILE = "FILE",
    }

    function getMessageType(type: MessageType): string {
        switch (type) {
            case MessageType.TEXT: return "Text message";
            case MessageType.IMAGE: return "Image message";
            case MessageType.VIDEO: return "Video message";
            case MessageType.FILE: return "File message";
            default: return "Unknown message type";
        }
    }
}

// ### 문제 8: 시스템 로그 레벨
{
    enum LogLevel {
        INFO = "INFO",
        WARN = "WARN",
        ERROR = "ERROR",
        DEBUG = "DEBUG",
    }

    function logMessage(level: LogLevel, message: string): void {
        switch (level) {
            case LogLevel.INFO: console.log("INFO: " + message); break;
            case LogLevel.WARN: console.warn("WARN: " + message); break;
            case LogLevel.ERROR: console.error("ERROR: " + message); break;
            case LogLevel.DEBUG: console.debug("DEBUG: " + message); break;
        }
    }
}

// ### 문제 9: 날짜 유형 (일반, 휴일)
{
    enum DayType {
        WEEKDAY = "WEEKDAY",
        WEEKEND = "WEEKEND",
    }

    function getDayType(day: DayType): string {
        switch (day) {
            case DayType.WEEKDAY: return "It's a weekday";
            case DayType.WEEKEND: return "It's a weekend";
            default: return "Unknown day type";
        }
    }
}

// ### 문제 10: 마케팅 캠페인 유형
{
    enum CampaignType {
        DISCOUNT = "DISCOUNT",
        PROMOTION = "PROMOTION",
        GIVEAWAY = "GIVEAWAY",
    }

    function getCampaignType(type: CampaignType): string {
        switch (type) {
            case CampaignType.DISCOUNT: return "Discount campaign";
            case CampaignType.PROMOTION: return "Promotion campaign";
            case CampaignType.GIVEAWAY: return "Giveaway campaign";
            default: return "Unknown campaign type";
        }
    }
}