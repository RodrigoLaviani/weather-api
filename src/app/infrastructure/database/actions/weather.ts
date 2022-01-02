import { WeatherModel } from '../models/weather';
import { Weather } from '../../../shared/models/weather';

export const getConversations = async (conversationIds: string[]): Promise<any> => {
    try {
        const conversationsDb = await WeatherModel.find().lean()
        const conversationsDbIds = conversationsDb.map((conversation: any) => conversation.conversationId)
        const conversationIdsToRemove = conversationsDbIds.filter((conversation: string) => !conversationIds.includes(conversation))
        
        const start = new Date().getTime();
        const lag = new Date().getTime() - start;

        return conversationsDb.filter((conversation: any) => !conversationIdsToRemove.includes(conversation.conversationId))
    } catch (err) {
        console.error('Error from import data from database', err);
        throw err
    }
};