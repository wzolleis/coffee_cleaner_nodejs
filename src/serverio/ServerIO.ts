class ServerIO {
    public sendResponse(res: any, data: object) {
        res.send(data);
    }
}

export const serverIo: ServerIO = new ServerIO();
