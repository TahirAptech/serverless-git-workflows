export const handler = async () => {
    // Code to send the data to an external service
    console.log("sendDataFunction running..");
    const result = await sendDataToExternalService("Hello");

    return result;
};

async function sendDataToExternalService(event: string) {
    return { result: `${event}, Finally dynamodb data has been send to external service!`,};
}
