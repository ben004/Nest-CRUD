import { Injectable, NestMiddleware, HttpException, HttpStatus } from '@nestjs/common';
@Injectable()
export class ResponseMiddleware implements NestMiddleware {
	use(req: any, res: any, next: () => void) {
		res.success = (code: number, data: any) => {
			res.status(code).json({
				status: true,
				code: code || 200,
				data: data || null,
			});
		};

		res.error = (err: any) => {
			const code = err instanceof HttpException ? err.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
			const value = typeof err.response !== 'undefined' ? err.response.value !== 'undefined' ? err.response.value: {} : {};
			const message =
				typeof err.message !== 'undefined' ? err.message : err.stack || err;
			res.status(code).json({
				status: false,
				code: code || 500,
				displayMessage: message || null,
				developerMessage: err.stack || null,
			});
		};

		next();
	}
}
