var redlight = {
    misc: {},
    animation: {},
    mobile: {},
    modal: {}
};
redlight.misc = {
    changeListType: function() {
        $("#get-list").click(function() {
            $(this).find("span").addClass("selected"), $("#get-grid span").removeClass("selected"), $("#grid-list").hide(), $("#horz-list").show()
        }), $("#get-grid").click(function() {
            $(this).find("span").addClass("selected"), $("#get-list span").removeClass("selected"), $("#grid-list").show(), $("#horz-list").hide()
        })
    },
    duplicateAddress: function() {
        $("#use-delivery-address").change(function() {
            return this.checked ? void $(".copy-delivery").each(function() {
                return fieldValue = $(this).val(), fieldAttribute = $(this).attr("data-field-name"), $('input[data-field-name="billing-' + fieldAttribute + '"]').val(fieldValue)
            }) : $('input[data-field-name*="billing-"]').val("")
        })
    },
    changeQuantity: function() {
        $(".decrease-quantity").click(function() {
            return $("#item-quantity").val() > 1 ? $("#item-quantity").val(parseInt($("#item-quantity").val()) - 1) : void 0
        }), $(".increase-quantity").click(function() {
            return $("#item-quantity").val(parseInt($("#item-quantity").val()) + 1)
        })
    },
    scrollHelper: function() {
        return $scroller = $(".scroller"), 0 == $scroller.length ? !1 : ($scroller.bind("scroll", function() {
            $(this)[0].offsetHeight < $(this)[0].scrollHeight && ($(this).scrollTop() + $(this).innerHeight() >= this.scrollHeight ? ($("#cart-navigation .icon-arrow-down-2").css("display", "none"), $("#cart-navigation .icon-arrow-up-2").css("display", "inline-block")) : 0 == $(this).scrollTop() && ($("#cart-navigation .icon-arrow-up-2").css("display", "none"), $("#cart-navigation .icon-arrow-down-2").css("display", "inline-block")))
        }), void($scroller[0].offsetHeight < $scroller[0].scrollHeight || $("#cart-navigation").css("display", "none")))
    },
    escapeSearch: function() {
        $(document).keyup(function(e) {
            27 == e.keyCode && $("#search-overlay i.icon-close").click()
        })
    },
    displayCreditCardForm: function(e, t) {
        $(".payment-choices img").on("click", function() {
            var n = $(this),
                i = n.parent().find("input[type=radio]");
            i.prop("checked", !0), $(e).hide(), i.val() == t && $(e).show()
        }), $(".payment-choices input:radio").on("click", function() {
            $(e).hide(), $(this).val() == t && $(e).show()
        }), $(".payment-choices input:radio").each(function() {
            $(this).is(":checked") && $(this).val() == t && $(e).show()
        })
    }
}, redlight.animation = {
    imageGallery: function() {
        $(".product-thumb img").click(function() {
            var e = $(this),
                t = e.attr("data-src");
            return $(".product-main img").attr("src", t), $(".product-thumb img").removeClass("selected"), e.addClass("selected")
        })
    },
    displaySearch: function() {
        $("#search-icon").click(function() {
            $("#search-overlay").addClass("active"), $(this).addClass("active")
        }), $("#search-overlay i.icon-close").click(function() {
            $("#search-overlay").removeClass("active"), $("#search-icon").removeClass("active")
        })
    },
    cartPopup: function() {
        var e = $("#cart-container"),
            t = e.outerHeight(),
            n = 60;
        e.css("top", -(t - n))
    },
    temporaryCartPopup: function(e) {
        $("#cart-container").addClass("active temp"), setTimeout(function() {
            $("#cart-container").removeClass("active temp")
        }, e)
    },
    autoHideCartPoup: function() {
        setInterval(function() {
            var e = $("#cart-container");
            e.hasClass("active") && !e.hasClass("temp") && e.removeClass("active")
        }, 1e4)
    },
    checkoutOrderSummaryHeight: function() {
        if ($(".checkout-body").length > 0) {
            var e = $(".checkout-body").delay(5e3).height();
            $(".order-summary").css("height", e)
        }
    },
    displayCart: function() {
        $("body").on("click", "#basket-icon.active-basket", function() {
            $("#cart-container").toggleClass("active")
        })
    },
    selectDelivery: function() {
        $("body").on("click", "#delivery-services table tbody tr", function() {
            $("#delivery-services table tbody tr").removeClass("active"), $(this).addClass("active"), $(this).find("td:last-child input").prop("checked", !0)
        })
    }
}, redlight.modal = {
    standard: function(e) {
        $(e).modal({
            backdrop: "static",
            keyboard: !1
        })
    },
    open: function(e, t) {
        $(e).click(function() {
            return redlight.modal.standard(t), !1
        })
    }
};