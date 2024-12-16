export enum LanguagesEnum {
	JavaScript = "javascript",
	TypeScript = "typescript",
	HTML = "html",
	CSS = "css",
	JSON = "json",
}

export interface CodeExecutionPayload {
	code: string
	language: LanguagesEnum
}

export interface CodeExecutionResponse {
	status: CodeExecutionStatusEnum
	output: string
}

export enum CodeExecutionStatusEnum {
	Success = "success",
	Error = "error",
}
