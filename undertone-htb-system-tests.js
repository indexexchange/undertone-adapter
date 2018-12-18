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
                sizes: [[300, 250]],
                placementId: "1234"
            },
            2: {
                sizes: [[300, 600]],
                placementId: "1234"
            }
        }
    };
}

function getBidRequestRegex() {
    return {
        method: 'POST',
        urlRegex: /hb\.undertone\.com\/hb.*/
    };
}

function validateBidRequest(request) {

    expect(request.query.pid).toBe("12345");
    expect(request.query.domain).toBeDefined();
}

function getValidResponse(request, creative) {

    //debugger;
    console.log("bidreqid: " + JSON.stringify(JSON.parse(request.body)["x-ut-hb-params"][0]["bidRequestId"]));
    //console.log("req body: " + JSON.stringify(request));
    var response = JSON.stringify([
        {
            ad: creative,
            publisherId: 12345,
            bidRequestId: JSON.parse(request.body)["x-ut-hb-params"][0]["bidRequestId"],
            //placementId
            adId: 15,
            campaignId: 2,
            height: 250,
            width: 300,
            ttl: 720,
            currency: 'USD',
            cpm: 2,
            adaptor: 'indexexchange',
            netRevenue: true
        },
        {
            ad: creative,
            publisherId: 12345,
            bidRequestId: JSON.parse(request.body)["x-ut-hb-params"][1]["bidRequestId"],
            adId: 15,
            campaignId: 2,
            height: 600,
            width: 300,
            ttl: 720,
            currency: 'USD',
            cpm: 2,
            adaptor: 'indexexchange',
            netRevenue: true
        }
    ]);

    return response;

    // var response = JSON.stringify([
    //     {
    //         ad: creative,
    //         publisherId: request.query.publisherId,
    //         bidRequestId: request.body["x-ut-hb-params"][0].bidRequestId,
    //         placementId: request.body["x-ut-hb-params"][0].placementId,
    //         height: request.body["x-ut-hb-params"][0].sizes[0][0],
    //         width: request.body["x-ut-hb-params"][0].sizes[0][1],
    //         cpm: 5,
    //     },
    //     {
    //         ad: creative,
    //         publisherId: request.query.publisherId,
    //         bidRequestId: request.body["x-ut-hb-params"][1].bidRequestId,
    //         placementId: request.body["x-ut-hb-params"][1].placementId,
    //         height: request.body["x-ut-hb-params"][1].sizes[0][0],
    //         width: request.body["x-ut-hb-params"][1].sizes[0][1],
    //         cpm: 5,
    //     }
    // ]);
}

function validateTargeting(targetingMap) {
    //expect(targetingMap).toEqual(jasmine.object());
    // expect(targetingMap).toEqual(jasmine.objectContaining({
    //     //ix_undr_cpm: jasmine.arrayContaining(['300x250_5']),
    //     ix_undr_id: jasmine.arrayContaining([jasmine.any(String)])
    // }));

    console.log(targetingMap);
    expect(targetingMap).toEqual(jasmine.objectContaining({
        ix_undr_cpm: jasmine.arrayContaining(['300x250_200']),
    }));
}

function getPassResponse() {
    var response = JSON.stringify([
        {
            ad: creative,
            publisherId: 12345,
            bidRequestId: JSON.parse(request.body)["x-ut-hb-params"][0]["bidRequestId"],
            //placementId
            adId: 15,
            campaignId: 2,
            height: 250,
            width: 300,
            ttl: 720,
            currency: 'USD',
            cpm: 0,
            adaptor: 'indexexchange',
            netRevenue: true
        },
        {
            ad: creative,
            publisherId: 12345,
            bidRequestId: JSON.parse(request.body)["x-ut-hb-params"][1]["bidRequestId"],
            adId: 15,
            campaignId: 2,
            height: 600,
            width: 300,
            ttl: 720,
            currency: 'USD',
            cpm: 0,
            adaptor: 'indexexchange',
            netRevenue: true
        }
    ]);

    return response;
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
    getValidResponse: getValidResponse,
    validateTargeting: validateTargeting,
    getPassResponse: getPassResponse
    //getValidBidResponseWithDeal: getValidBidResponseWithDeal,
    //validateTargetingWithDeal: validateTargetingWithDeal
};
