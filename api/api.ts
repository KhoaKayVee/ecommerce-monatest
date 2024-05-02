import { request, gql } from "graphql-request";

export const document = gql`
  query getCart($cart_id: String!) {
    cart(cart_id: $cart_id) {
      id
      is_virtual
      total_quantity
      prices {
        discounts {
          amount {
            ...MoneyFields
          }
          ...DiscountFields
        }
        grand_total {
          ...MoneyFields
        }
        subtotal_excluding_tax {
          ...MoneyFields
        }
      }
      items {
        errors {
          code
          message
        }
        quantity
        uid
        product {
          ...ProductInterfaceField
        }
        prices {
          discounts {
            amount {
              ...MoneyFields
            }
            ...DiscountFields
          }
          price {
            ...MoneyFields
          }
          row_total {
            ...MoneyFields
          }
          total_item_discount {
            ...MoneyFields
          }
        }
      }
    }
  }

  fragment ProductInterfaceField on ProductInterface {
    __typename
    sku
    uid
    name
    url_key
    url_suffix
    canonical_url
    stock_status
    meta_description
    meta_keyword
    meta_title
    new_from_date
    new_to_date
    rating_summary
    review_count
    thumbnail {
      position
      ...ProductImageFields
    }
    image {
      ...ProductImageFields
    }
    ...CustomField
  }

  fragment CustomField on ProductInterface {
    color
    size
    rating_summary_start {
      star_1
      star_2
      star_3
      star_4
      star_5
    }
    attributes {
      attribute_code
      label
      value
    }
  }

  fragment DiscountFields on Discount {
    label
  }

  fragment MoneyFields on Money {
    currency
    value
  }

  fragment ProductImageFields on ProductImage {
    url
  }
`;
