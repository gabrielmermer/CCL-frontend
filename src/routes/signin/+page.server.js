//export const actions = {
//	default: async ({ request }) => {
//		const data = await request.formData();
//		console.log(data);
//		try {
//			const response = await fetch('http://localhost:3000/login', {
//				method: 'POST',
//				body: JSON.stringify(data)
//			});
//
//			if (response.ok) {
//				// Handle successful response
//				console.log('Data successfully submitted');
//			} else {
//				// Handle error response
//				console.error('Error submitting data:', response.status);
//			}
//		} catch (error) {
//			// Handle network error
//			console.error('Network error:', error);
//		}
//	}
//};
