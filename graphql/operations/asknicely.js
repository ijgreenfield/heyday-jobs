import { gql } from "@apollo/client";

export default {
    Queries: {

    },
    Mutations: {
        createEvent: gql`
            mutation queue_event($input: EventInput!) {
                queue_event(input: $input) {
                    type
                    payload
                    profile_id
                }
            }
        `
    },
    Subscriptions: {

    }
}