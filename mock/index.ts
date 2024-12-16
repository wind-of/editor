import { CodeCompilationStatusEnum, type CodeCompilationResponse } from "~/types"

export const successResponseMock: CodeCompilationResponse = {
	status: CodeCompilationStatusEnum.Success,
	output: "Hello, World!",
}
export const errorResponseMock: CodeCompilationResponse = {
	status: CodeCompilationStatusEnum.Error,
	output: "Syntax Error:418 - I'm a teapot",
}

export const mockedResponses: Record<CodeCompilationStatusEnum, CodeCompilationResponse> = {
	[CodeCompilationStatusEnum.Success]: successResponseMock,
	[CodeCompilationStatusEnum.Error]: errorResponseMock,
}
