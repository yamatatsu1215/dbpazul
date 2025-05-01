//全ての型を定義するファイル
//DBの型を定義するファイル

//Userテーブル
export interface User {
    id: string; // ユーザーID
    username: string; // ユーザー名
    email: string; // メールアドレス
    password: string; // パスワード
    profileImage: string; // プロフィール画像URL
    created_at: Date; // 作成日時
    updated_at: Date; // 更新日時
}

//Roomテーブル
export interface Room {
    id: string; // ルームID
    name: string; // ルーム名
    createdBy: string; // 作成者のユーザーID
    createdAt: Date; // 作成日時
}

//RoomParticipantテーブル
export interface RoomParticipant {
    id: string; // 参加者ID
    roomId: number; // ルームID
    userId: number; // ユーザーID
    joinedAt: Date; // 参加日時
}

// Followテーブル
export interface Follow {
    id: string; // フォローID
    followerId: string; // フォロワーのユーザーID
    followedId: string; // フォロイーのユーザーID
    createdAt: Date; // フォロー日時
}

// Messageテーブル
export interface Message {
    id: string; // メッセージID
    roomId: string; // ルームID
    senderId: string; // ユーザーID
    content: string; // メッセージ内容
    createdAt: Date; // 作成日時
}

export interface Participant {
    id: number;
    name: string;
    avatar: string;
    isSpeaking: boolean;
}

export interface ControlBarProps {
    micOn: boolean;
    setMicOn: (value: boolean) => void;
    videoOn: boolean;
    setVideoOn: (value: boolean) => void;
    screenSharing: boolean;
    setScreenSharing: (value: boolean) => void;
    sidebarOpen: boolean;
    setSidebarOpen: (value: boolean) => void;
    tabValue: number;
}

export interface SidebarDrawerProps {
    open: boolean;
    onClose: () => void;
    tabValue: number;
    onTabChange: (event: React.SyntheticEvent, newValue: number) => void;
    participants: Participant[]; // Updated to use the Participant type
    messages: Message[]; // Replace `any[]` with a more specific type if available
    message: string;
    setMessage: (message: string) => void;
    onSendMessage: () => void;
  }

export interface ChatTabProps {
    messages: Message[];
    message: string;
    setMessage: (value: string) => void;
    onSendMessage: () => void;
  }


export interface ParticipantsTabProps {
    participants: Participant[];
  }