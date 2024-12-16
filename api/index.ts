import { mockedResponses } from "~/mock"

export function compileCode(payload: CodeExecutionPayload) {
	return new Promise((resolve, reject) =>
		setTimeout(() => {
			Math.random() > 0.5 ? resolve(mockedResponses.success) : reject(mockedResponses.error)
		}, 2000),
	)
}
