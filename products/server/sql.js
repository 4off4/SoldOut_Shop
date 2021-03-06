module.exports = {
    //제품판매 리스트
    productList : {
        query: `SELECT
                    t1.*
                    , t2.path
                    , t3.category1
                    , t3.category2
                    , t3.category3 
                FROM 
                    t_product t1, t_image t2, t_category t3
                WHERE t1.id = t2.product_id 
                AND	t2.type = 1
                AND	t1.category_id = t3.id`
    },
    /*상세 페이지*/
    //조회
    productDetail: {
        query: `SELECT
                    t1.*
                    , t2.path
                    , t3.category1
                    , t3.category2
                    , t3.category3 
                FROM 
                    t_product t1, t_image t2, t_category t3
                WHERE t1.id = ?
                AND	t1.id = t2.product_id
                AND	t2.type = 3
                AND	t1.category_id = t3.id`
    },
    //메인이미지 여러건 나오는
    productMainImages: {

        query: `SELECT * FROM t_image WHERE product_id = ? AND type = 2`
    },

    /*제품등록*/
    productInsert: {
        query: `INSERT INTO t_product (product_name, product_price, delivery_price, add_delivery, tags, outbound_days, seller_id, category_id)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
    },
    productImageInsert: {
        query: `INSERT INTO t_image (product_id, type, path)
        VALUES (?,?,?)`
    },

    sellerList : {
        query: `select * from t_seller`
    }
    
}