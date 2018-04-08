class ServerIO {
    public sendResponse(res: any, data: object) {
        res.json(data);
    }
}

export const serverIo: ServerIO = new ServerIO();
