import { IMailProvider } from "../IMailProvider";


class EtherealMailProvider implements IMailProvider {
  async sendMail(to: string, subject: string, variables: any, path: string): Promise<void> {
    
  }
}

export { EtherealMailProvider }