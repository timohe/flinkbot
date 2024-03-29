import * as rp from "request-promise";
import * as restify from "restify";

export async function getZipCode(token: string): Promise<any> {
	try {
		const userInfo = await getUserInfo(token);
		// tslint:disable-next-line:prefer-const
		let zipCode = userInfo.zipCode;
		console.log("this is your zip code" + zipCode);
		return zipCode;
	} catch (err) {
		return err;
	}
}

export function getUserInfo(token: string): Promise<any> {
	const options = {
		method: "GET",
		uri: "https://test.goflink.ch/api/v1/customers/me",
		headers: { Authorization: token },
		json: true, // Automatically stringifies the body to JSON
	};
	return rp(options);
}

export function getHumanOnSlack(message: string): Promise<any> {
	const options = {
		method: "POST",
		uri: "https://hooks.slack.com/services/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",
		body: {
			"text": message,
		},
		json: true, // Automatically stringifies the body to JSON
	};
	return rp(options);
}
