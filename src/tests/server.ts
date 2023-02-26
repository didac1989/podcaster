import { setupServer } from 'msw/node';
import {
  DefaultBodyType,
  PathParams,
  ResponseComposition,
  rest,
  RestContext,
  RestRequest,
} from 'msw';

type HandlerConfigProps = {
  path: string;
  method?: 'get' | 'post' | 'delete' | 'patch';
  res: (
    req:
      | RestRequest<never, PathParams<string>>
      | RestRequest<DefaultBodyType, PathParams<string>>,
    res: ResponseComposition<DefaultBodyType>,
    ctx: RestContext
  ) => any;
};

export const createServer = (handlerConfig: HandlerConfigProps[]) => {
  const handlers = handlerConfig.map((config) => {
    return rest[config.method || 'get'](config.path, (req, res, ctx) => {
      return res(ctx.json(config.res(req, res, ctx)));
    });
  });

  const server = setupServer(...handlers);
  beforeAll(() => {
    server.listen();
  });
  afterEach(() => {
    server.resetHandlers();
  });
  afterAll(() => {
    server.close();
  });
};
