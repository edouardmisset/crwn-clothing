import { connect } from 'react-redux'
import CollectionItem from '../../components/collection-item/CollectionItem'
import { selectCollection } from '../../redux/shop/shopSelector'
import './CollectionPage.scss'

const CollectionPage = ({ collection }) => (
  <div className="collection-page">
    <h2 className="title">COLLECTION PAGE</h2>
    {/* <div>{match.params.collectionId}</div> */}
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
})

export default connect(mapStateToProps)(CollectionPage)
