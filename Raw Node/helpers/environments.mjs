const environments = {}

environments.staging = {
    port: 3000,
    envName: 'staging',
    secretKey: 'slfdjsljfsd',
    maxChecks: 5,
    twilio: {
        fromPhone: '+13137259478',
        accountSid: 'AC0f6a200bf3639390f5508ff3568b8ac5',
        authToken: 'e4ff53b110ad3a9ae96e148184134d5a',
    },
};
environments.production = {
    port: 5000,
    envName: 'production',
    secretKey: 'fjiosjflskf',
    maxChecks: 5,
    twilio: {
        fromPhone: '+13137259478',
        accountSid: 'AC0f6a200bf3639390f5508ff3568b8ac5',
        authToken: 'e4ff53b110ad3a9ae96e148184134d5a',
    },
};

const currentEnvironment = typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV: 'staging'

const environmentToExport = typeof environments[currentEnvironment] === 'object' ? environments[currentEnvironment]: environments.staging;

export default environmentToExport;
export const {maxChecks, twilio} = environmentToExport;
