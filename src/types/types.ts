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