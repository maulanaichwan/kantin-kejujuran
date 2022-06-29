export default {
    name: 'snacks',
    title: 'Snacks',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90
            }
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text'
        },
        {
            name: 'created_at',
            title: 'created at',
            type: 'datetime',
            options: {
                dateFormat: "DD-MM-YY",
                timeFormat: "hh:mm"
            }
        }
    ]
}