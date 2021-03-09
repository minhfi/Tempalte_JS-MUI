import React from 'react'
import ArticleHeader from '_components/article-header'
import Vietin from '_static/image/banner/banner_vietin.png'
// import ArticleBanner from '_components/article-banner'
// import ArticleFooter from '_components/article-footer'

const fakeData = {
  name: 'Vietinbank',
  banner: Vietin,
  short_description: 'Lorem...',
  description: 'Lorem ipsum ...',
  left_content:
    '[left] At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem r',
  right_content:
    '[right] At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem r',
  client: 'Vietinbank',
  office: 'Hanoi capital',
  type_of_work: 'CRM',
  type_of_client: 'Banking & Finance',
  project_teams: ['Thai Nguyen', 'Phong Nguyen', 'Thao Ta', 'Loi Nguyen']
}

const ProductInformations = () => {
  const data = fakeData
  return (
    <div className="product-informations container">
      <ArticleHeader
        className="product-informations__header"
        name={data.name}
        type={fakeData.type_of_client.concat(', ', data.type_of_work)}
        description={data.description}
        banner={data.banner}
      />

      <div className="product-informations__content">
        <div className="product-informations__content__left">
          <div dangerouslySetInnerHTML={{ __html: data.left_content }} />
        </div>

        <div className="product-informations__content__right">
          <div dangerouslySetInnerHTML={{ __html: data.right_content }} />
        </div>

        <div className="product-informations__content__footer">
          <div className="product-informations__content__footer__item">
            <div>Client</div>
            <div>{data.client}</div>
          </div>

          <div className="product-informations__content__footer__item">
            <div>Office</div>
            <div>{data.office}</div>
          </div>

          <div className="product-informations__content__footer__item">
            <div>Sector</div>
            <div>{data.type_of_work}</div>
          </div>

          <div className="product-informations__content__footer__item">
            <div>Discipline</div>
            <div>{data.type_of_client}</div>
          </div>

          <div className="product-informations__content__footer__item">
            <div>Project team</div>
            <div>
              {data.project_teams.map((name, i) => (
                <div key={i}>{name}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="product-informations__next">
        <div>Next project</div>
        <hr />

        <ArticleHeader
          className="product-informations__next__header"
          name={data.name}
          type={data.type_of_client.concat(', ', data.type_of_work)}
          description={data.description}
          banner={data.banner}
        />
      </div>
    </div>
  )
}

export default ProductInformations
