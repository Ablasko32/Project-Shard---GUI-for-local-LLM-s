import { CoreMessage, Message } from 'ai';

// export interface Message {
// 	id?: string;
// 	createdAt?: Date | undefined;
// 	role: string;
// 	content: string;
// }

export interface Model {
	name: string;
	model: string;
	size: number;
	modified_at: string;
	digest: string;
	details: ModelDetails;
}

export interface ModelDetails {
	families: [];
	family: string;
	format: string;
	parameter_size: string;
	parent_model: string;
	quantization_level: string;
}

export interface Body {
	model: string;
	messages: Message[];
	settingsSystemMessage?: string;
	id: string;
	ragMode: boolean;
}
