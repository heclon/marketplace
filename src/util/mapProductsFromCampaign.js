export const mapProductsFromCampaign = (campaigns) => {
  return campaigns.map((campaign) => {
    console.log("campaign: ", campaign);
    let priceStr = campaign.product.extra_data.min_investment_amount;
    let imageUrl = "";
    if (
      campaign.product.branding.logos &&
      campaign.product.branding.logos.svg &&
      campaign.product.branding.logos.svg.file_url
    ) {
      imageUrl = campaign.product.branding.logos.svg.file_url;
    } else {
      if (
        campaign.product.branding.logos &&
        campaign.product.branding.logos[`250_67`] &&
        campaign.product.branding.logos[`250_67`]
      ) {
        imageUrl = campaign.product.branding.logos[`250_67`].file_url;
      }
    }

    return {
      campaign_footprint: campaign.raw.footprint,
      abn_code: campaign.product.raw.abn_code,
      full_name: campaign.product.raw.full_name,
      description: campaign.product.extra_data.description_short,
      info: campaign.product.details_page_url,
      details_page_source_type:
        campaign.product.extra_data.details_page_source_type,
      details_page_custom_url:
        campaign.product.extra_data.details_page_custom_url,
      raw_emaf_url: campaign.raw.raw_emaf_url,
      image: imageUrl,
      price: priceStr.substring(0, priceStr.length - 3),
      category: campaign.product.raw.product_license_type_ui_label,
      tags: [
        campaign.product.raw.inv_objective_ui_label,
        campaign.product.raw.asset_class_ui_label,
      ],
      currency_code: campaign.product.raw.currency_code,
      currency_symbol: campaign.product.raw.currency_symbol,
    };
  });
};
