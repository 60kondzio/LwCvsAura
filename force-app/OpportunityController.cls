public with sharing class OpportunityController {

    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getOpportunities(String searchKey) {
        String key = '%' + searchKey + '%';
        List<Opportunity> opportunities = 
                [SELECT Id, Name, CloseDate FROM Opportunity WHERE Name LIKE :key];
        return opportunities;
    }
}