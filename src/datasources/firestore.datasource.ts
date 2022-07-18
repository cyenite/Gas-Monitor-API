import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'Firestore',
  connector: 'loopback4-connector-firestore',
  projectId: "gas-monitr",
  clientEmail: "api-288@gas-monitr.iam.gserviceaccount.com",
  privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDU8DREsQ26cr7I\nPnQneotXUKWYPxyxs3/ZpYB1dGQeA24hxm6sN69nkiJM5kn7y+1lL0sNQG5klT70\naVvjFiXA6NF2xnRNzxuxi4osWhR3OMi+BZtwfskzhClZRg3LSmT3EPHB7/bjD4Oy\nl2KzmsH6nsmvC2sIKOFvSUwZu+M37KdCXgxFfaonEtPwh8KR+DWbxQ1GHCoIGnYJ\nW7Ey4XNHNKZ+5amb/HJgWjmnoE3eM+rP9bwqW0BLd8947XmX1rAMHTpliTtJhj6N\nxF+du7VEWpV1wM5cKTnb0r3FpS/0atNfhyBZiULKZBIK3Vr3U2Gpdehj8Keexm6k\nzeTEFPwRAgMBAAECggEAXDQuzdfE1Ak/p0Gz1ixwDbz0F3qsmB3brIjHmRRvDbf6\nhlGANr5eC4DxrU7Clm91Oi1CWFif9JnTis3cZfZ/HosxuDaywcZ+fWCo0g+ncQB7\nnByddBbSVKZTqT52VqK+GWWS6aFYzHU5V6nJqW/HsxfyyQMus3fQNfoNI8+B0gKy\n61eoQdWhYvbZ0HJsJeD+x1PaDkiJtrPkTRFnnLmW/TBT/64qg/oilJSyfjVO5Fs+\nJp7xPhyS/1f3tbBlkQtvyoylUesfHAW7zad9vni5t5STCEAID/G/STHUmOUArzTG\n2qCEntBmxhoT0Xy4AyWLv42jAgRPr/CzYlnFDRI1SQKBgQD1wajDGlY9agIIBalS\n0HqHaWjQYIe5Fi6kuLx017nBtCGw5yn5VVWLfy2H/5pXSWPky9oYbXs35SRhFEsB\nH5YQi5iFfMTLqgCYFH4tNwuW3/zz2TIOAqG8aGlvfzadfGNHrRPSYcs2PZcr2RB8\nbVOG75d9C2jLrGs/vNkTka5LAwKBgQDd0FvonJFkr7ZYIRn4YuK6hD93WiURKoXe\n1n9UxBPLtebMrEy6RSFryiQrG58BOqw9yRmsmuKoLoNJm7djXY8d7GgOkti+AYT3\nXLhIZRP2VfKLrtMg1t6omWFHZP+5mbNzYbMN41h1GYV9NhJILVInk19X6uUMrR/+\nOAj1JbTGWwKBgBWxb40xUPWA2wcMQOMPhhFX66mhK7nZzGo76F7EACCqHuM3tIvO\nzYtPwZwkouIbl1bF682GNH89mdV77hb+S8fQGrmFxvVXX1ANVwn0tvAte22m+XUl\nJFO2P8BY0WBbb4QPMhW7Di4Oh76WHY9uMxZRJeUi0bBQ2vK4X80LagAzAoGAA5Zv\nJiACKgK9jEdcyCuxRxsEe8W1e8WYTLZjcNeLCmxywzS2OP0NQVUPqLLVq4trZcRu\n6d/Hcrjt3q7qFG1a9zzvoey2HLyhje6t/F3GKOHS/ndhatKO32M7s4/qovHdeSxH\nXR4kPCChjBjnyssQ3RsBG8bs1XunXNFDM9PcTKkCgYEAp7PUpHqG6Xwh9vknfQMf\nmnuzS1TLeow2HL0OXQStdvaX1uHL76Me4Tzk8zGYCDmz2H57ms5LfW7VBUHXPCAW\nu+A/dgKp78mbKLUOq5gs09GuGwYmIclE6wpCpu4tdUQpwGr11CCQtvbAXd8w0/cA\navraFQGpUGrv1GLSsXCCVsw=\n-----END PRIVATE KEY-----\n",
  databaseName: "gas-monitr",
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class FirestoreDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'Firestore';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.Firestore', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
