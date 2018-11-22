function getPartnerId() {
    return 'UndertoneHtb';
}

function getStatsId() {
    return 'UNDR';
}

function getCallbackType() {
    return 'NONE';
}

function getArchitecture() {
    return 'SRA';
}


function getConfig() {
    return {
        publisherId: "12345",
        xSlots: {
            1: {
                sizes: [[300, 250], [300, 600]]
            },
            2: {
                adUnitId: [[1,1]]
            }
        }
    };
}

function getBidRequestRegex() {
    return {
        method: 'POST',
        urlRegex: /hb\.undertone\.com\/hb\/\?.*/
    };
}

function validateBidRequest(request) {
    expect(request.query.pid).toBe("12345");
    expect(request.query.domain).toBeDefined();
    expect(request.body["x-ut-hb-params"]).toBeDefined();
}

function getValidBidResponse(request, creative) {

    return JSON.stringify([
        {
            ad: creative,
            publisherId: request.query.publisherId,
            bidRequestId: request.body["x-ut-hb-params"][0].bidRequestId,
            placementId: request.body["x-ut-hb-params"][0].placementId,
            height: request.body["x-ut-hb-params"][0].sizes[0][1],
            width: request.body["x-ut-hb-params"][0].sizes[0][0],
            cpm: 200,
        },
        {
            ad: creative,
            publisherId: request.query.publisherId,
            bidRequestId: request.body["x-ut-hb-params"][1].bidRequestId,
            placementId: request.body["x-ut-hb-params"][1].placementId,
            height: request.body["x-ut-hb-params"][1].sizes[0][1],
            width: request.body["x-ut-hb-params"][1].sizes[0][0],
            cpm: 200,
        }
    ]);
}

function validateTargeting(targetingMap) {
    expect(targetingMap).toEqual(jasmine.objectContaining({
        ix_undr_cpm: jasmine.arrayContaining(['300x250_200']),
        ix_undr_id: jasmine.arrayContaining([jasmine.any(String)])
    }));
}

function getPassResponse() {
    return "";
}

module.exports = {
    getPartnerId: getPartnerId,
    getStatsId: getStatsId,
    getCallbackType: getCallbackType,
    getArchitecture: getArchitecture,
    //getRequestsToBlock: getRequestsToBlock,
    getConfig: getConfig,
    getBidRequestRegex: getBidRequestRegex,
    validateBidRequest: validateBidRequest,
    getValidBidResponse: getValidBidResponse,
    validateTargeting: validateTargeting,
    getPassResponse: getPassResponse
    ///getValidBidResponseWithDeal: getValidBidResponseWithDeal,
    //validateTargetingWithDeal: validateTargetingWithDeal
};