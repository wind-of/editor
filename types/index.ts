export enum LanguagesEnum {
	JavaScript = "javascript",
	TypeScript = "typescript",
	Python = "python",
	Go = "golang",
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
