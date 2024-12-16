export enum LanguagesEnum {
	JavaScript = "javascript",
	TypeScript = "typescript",
	Python = "python",
	Go = "golang",
}

export interface CompileCodePayload {
	code: string
	language: LanguagesEnum
}

export interface CodeCompilationResponse {
	status: CodeCompilationStatusEnum
	output: string
}

export enum CodeCompilationStatusEnum {
	Success = "success",
	Error = "error",
}
