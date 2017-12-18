import { RouteBuilder, ApiGatewayRequest, ApiGatewayResponse } from 'jiffy-route-builder';

function createWidget(request: ApiGatewayRequest): Promise<ApiGatewayResponse> {
  return Promise.resolve({
    status: 200,
    body: `Created widget ${JSON.stringify(request.body)}`
  });
}

function getWidget(request: ApiGatewayRequest, params: { [key: string]: string }): Promise<ApiGatewayResponse> {
  return Promise.resolve({
    status: 200,
    body: {
      id: params['id']
    }
  })
}

let builder = new RouteBuilder();
builder.setCatchAllOptions(true);
builder.add('/widgets', createWidget, 'POST');
builder.add('/widgets/:id', getWidget);
export var endpoint = builder.build();
