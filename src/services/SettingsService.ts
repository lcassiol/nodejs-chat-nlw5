import { getCustomRepository } from 'typeorm';
import { SettingsRepository } from '../repositories/SettingsRepository';

interface ISetttingsCreate {
  chat: boolean;
  username: string;
}

class SettingsService {
   async create({ chat, username} :  ISetttingsCreate){
      const settingsRepository = getCustomRepository(SettingsRepository);

      const userAlreadyExists = await settingsRepository.findOne({
        username
      });

      if(userAlreadyExists){
        throw new Error("User already exists!");
      }

      const settings = settingsRepository.create({
        chat, 
        username
      });

      await settingsRepository.save(settings);

      return settings;
   }
}

export { SettingsService };