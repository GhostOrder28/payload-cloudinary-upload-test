import { CollectionConfig } from 'payload/types'

const ProductImage: CollectionConfig = {
  slug: 'product-image',
  access: {
    read: () => true
  },
  upload: {
    disableLocalStorage: true,
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Nombre de la imagen',
      required: true,
      access: {
        read: () => true
      }
    },
  ]
}

export default ProductImage;
