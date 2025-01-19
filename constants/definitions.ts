export type UserProps = {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    uid: string,
    createdAt: Date
}

export type ProductProps = {
    id: string,
    name: string,
    description: string,
    price: number,
    qrCode: string,
    images: string[],
    category: string
    status: "available" | "sold",
    createdAt: Date
    auction: boolean
}

export type NotificationProps = {
    id: string,
    title: string,
    message: string,
    link?: string
}

export type LiveProps = {
    id: string,
    title: string,
    status: "waiting" | "active" | "ended",
    currentProductId: string,
    startTime: Date,
    endTime: Date,
    link: string,
    viewers: number
}

export type TransactionsProps = {
    id: string,
    type: "purchase" | "withdrawal",
    productId: string,
    counterPartyId: string,
    amount: number,
    status: string,
    paymentMethod: PaymentMethodProps,
    createdAt: Date
}

export type PaymentMethodProps = {
    id: string,
    type: string,
    number: number,
    name: string
}

export type OnboardingItemProps = {
    id: string,
    title: string,
    description: string,
    image: string
}

// navigation/types.ts

export type RootStackParamList = {
    Home: undefined;
    Login: undefined;
    SignUp: undefined;
  };
  