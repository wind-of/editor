import { CodeExecutionStatusEnum, type CodeExecutionResponse } from "~/types"

export const successResponseMock: CodeExecutionResponse = {
	status: CodeExecutionStatusEnum.Success,
	output: "Hello, World!",
}
export const errorResponseMock: CodeExecutionResponse = {
	status: CodeExecutionStatusEnum.Error,
	output: "Syntax Error:418 - I'm a teapot",
}

export const mockedResponses: Record<CodeExecutionStatusEnum, CodeExecutionResponse> = {
	[CodeExecutionStatusEnum.Success]: successResponseMock,
	[CodeExecutionStatusEnum.Error]: errorResponseMock,
}
