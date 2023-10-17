export default function createFeedbackAPI(options: {
    webhooks: string[];
}): (req: NextApiRequest, res: NextApiResponse) => Promise<any>;
