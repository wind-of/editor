import { mockedResponses } from "~/mock"

export function executeCodeRequest(payload: CodeExecutionPayload): Promise<CodeExecutionResponse> {
	return new Promise((resolve) =>
		setTimeout(
			() => resolve(Math.random() > 0.5 ? mockedResponses.success : mockedResponses.error),
			2000,
		),
	)
}
